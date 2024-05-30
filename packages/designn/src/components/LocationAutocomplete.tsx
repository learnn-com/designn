import React, { useState, useEffect } from 'react'
import { SuggestionInput, Suggestion } from './SuggestionInput'
import { Box } from './Box'
import { TextInputProps } from './TextInput'

const fetchGoogleMapsSuggestions = async (input: string, apiKey: string): Promise<Suggestion[]> => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(cities)&key=${apiKey}`
  )
  const data = await response.json()
  return data.predictions.map((prediction: any) => ({
    id: prediction.place_id,
    label: prediction.description
  }))
}

type LocationAutocompleteProps = {
  apiKey: string
  value: string
  label?: string
  onChange: (value: string) => void
  onSuggestionSelected?: (suggestion: Suggestion) => void
}

export const LocationAutocomplete = ({
  apiKey,
  value,
  onChange,
  onSuggestionSelected,
  ...props
}: LocationAutocompleteProps & TextInputProps) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [inputValue, setInputValue] = useState<string>('')


  useEffect(() => {
    if (value)
      setInputValue(value)
  }, [])

  useEffect(() => {
    
  }, [inputValue, apiKey])

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    if (newValue) {
      fetchGoogleMapsSuggestions(newValue, apiKey)
      .then(results => setSuggestions(results))
      .catch(() => setSuggestions([]))
    } else {
      setSuggestions([])
    }

    setInputValue(newValue)
    onChange(newValue)
  }

  const handleSuggestionSelected = (suggestion: Suggestion) => {
    setInputValue(suggestion.label)
    onChange(suggestion.label)
    setSuggestions([])
    onSuggestionSelected && onSuggestionSelected(suggestion)
  }

  return (
    <Box position="relative" width="100%">
      <SuggestionInput
        value={inputValue}
        suggestions={suggestions}
        onChange={handleInputChange}
        onSuggestionSelected={handleSuggestionSelected}
        activeSuggestionId={suggestions.find(s => s.label === inputValue)?.id}
        {...props}
      />
    </Box>
  )
}