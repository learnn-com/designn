import React, { useState, useEffect, FC } from 'react'
import { SuggestionInput, Suggestion } from './SuggestionInput'
import { Box } from './Box'
import { TextInputProps } from './TextInput'
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete from 'use-places-autocomplete'

type LocationAutocompleteProps = {
  apiKey: string
  value: string
  label?: string
  onChange: (value: string) => void
  onSuggestionSelected?: (suggestion: Suggestion) => void
}

export const LocationAutocompleteComponent = ({
  apiKey,
  value,
  onChange,
  onSuggestionSelected,
  ...props
}: LocationAutocompleteProps & TextInputProps) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const {
    ready,
    setValue,
    suggestions: placeSuggestions,
  } = usePlacesAutocomplete({});

  useEffect(() => {
    if (value)
      setInputValue(value)
  }, [])

  useEffect(() => {
    if (placeSuggestions.data.length > 0)
      setSuggestions(placeSuggestions.data.map(x => ({id: x.id, label: x.description})))
  }, [placeSuggestions])

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    if (newValue) {
      setValue(newValue);
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

  if (!ready) return <></>

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

export const LocationAutocompleteLoader: FC<LocationAutocompleteProps & TextInputProps> = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: props.apiKey,
    libraries: ["places"]
  });

  if (isLoaded)
    return <LocationAutocompleteComponent {...props}/>
  else
    return <></>
  
}

export const LocationAutocomplete = LocationAutocompleteLoader