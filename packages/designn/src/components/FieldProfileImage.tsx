import { LayoutProps, SpaceProps } from 'styled-system';
import { HorizontalStack } from './HorizontalStack';
import { Title } from './Title';
import styled, { useTheme } from 'styled-components';
import { Box } from './Box';
import { ReactNode, useRef, useState } from 'react';

export type FieldProfileImageProps = {
  defaultText?: string;
  imageUrl?: string;
  loading?: string;
  disableChange?: boolean;
  editIcon?: ReactNode;
  onFileChange?: (file: File) => unknown;
};

export const FieldProfileImage = ({
  defaultText,
  imageUrl,
  disableChange,
  editIcon,
  onFileChange,
  loading,
  ...props
}: FieldProfileImageProps & SpaceProps & LayoutProps) => {
  const { borders, spacing, colors } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
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
      height={spacing.space_24}
      width={spacing.space_24}
      borderRadius={borders.radius.base}
      bg={colors.interaction_background.secondary_active}
      borderStyle="solid"
      borderColor={colors.interaction_outline.secondary_active}
      borderWidth={borders.width.base}
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
          {defaultText ?? 'DC'}
        </Title>
      )}
      {(isHovered && !disableChange && !loading) && (
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