import { LayoutProps, SpaceProps } from 'styled-system';
import { HorizontalStack } from './HorizontalStack';
import { Title } from './Title';
import styled, { useTheme } from 'styled-components';
import { Box } from './Box';
import { ReactNode, useRef } from 'react';
import { Spacing } from 'theme/tokens/spacing';

export type FieldProfileImageProps = {
  placeholder?: string;
  imageUrl?: string;
  loading?: string;
  editIcon?: ReactNode;
  size?: Spacing,
  onFileChange?: (file: File) => unknown;
  variant?: 'standard' | 'edit'
};

export const FieldProfileImage = ({
  placeholder,
  imageUrl,
  editIcon,
  onFileChange,
  loading,
  size,
  variant,
  ...props
}: FieldProfileImageProps & SpaceProps & LayoutProps) => {
  const { borders, spacing, colors } = useTheme();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileChange && onFileChange(file);
    }
  };

  const handleOpenClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <HorizontalStack
      height={size ?? spacing.space_24}
      width={size ?? spacing.space_24}
      borderRadius={borders.radius.base}
      bg={colors.interaction_background.secondary_active}
      borderStyle="solid"
      borderColor={colors.interaction_outline.secondary_active}
      borderWidth={borders.width.base}
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      {...props}
    >
      {imageUrl ? (
        <Box
          width="100%"
          height="100%"
          backgroundImage={`url(${imageUrl})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
      ) : (
        <Title variant="heading2xl" fontWeight="regular">
          {placeholder}
        </Title>
      )}
      {(variant === 'edit' && !loading) && (
        <>
          <Box
            position="absolute"
            width="100%"
            height="100%"
            bg={colors.interaction_background.secondary_active}
            opacity={0.5}
            cursor="pointer"
            justifyContent="center"
            alignItems="center"
          />
          <HorizontalStack
            position="absolute"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            onClick={handleOpenClick}
          >
            {editIcon}
          </HorizontalStack>
        </>
      )}
      { loading && (
        <>
          <Box
            position="absolute"
            width="100%"
            height="100%"
            bg={colors.interaction_background.secondary_active}
            opacity={0.5}
            justifyContent="center"
            alignItems="center"
          />
          <HorizontalStack
            position="absolute"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Loader />
          </HorizontalStack>
        </>
      )}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/png, image/gif, image/jpeg"
        onChange={handleFileChange}
      />
    </HorizontalStack>
  );
};


const Loader = styled.div`
  width: ${p => p.theme.spacing.space_5};
  padding: ${p => p.theme.spacing.space_1};
  aspect-ratio: 1;
  border-radius: 50%;
  margin-right: ${p => p.theme.spacing.space_2};
  background: ${p => p.theme.colors.interaction_background.primary_active};
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
  @keyframes l3 {to{transform: rotate(1turn)}}
`