import { Text, TextProps } from 'react-native';

type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';

/**
 * font-normal = normal
 * text-3xl = h1
 * text-xl = h2
 * font-bold = semi-bold
 * link = font-normal underline
 */

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

const ThemedText = ({ className, type, ...rest }: Props) => {
  // className='mt-10 text-3xl text-light-text dark:text-dark-text'
  return (
    <Text
      className={[
        'text-light-text dark:text-dark-text',
        type === 'normal' ? 'font-normal' : undefined,
        type === 'h1' ? 'text-3xl' : undefined,
        type === 'h2' ? 'text-xl' : undefined,
        type === 'semi-bold' ? 'font-bold' : undefined,
        type === 'link' ? 'font-nomal underline' : undefined,
        className,
      ].join(' ')}
      {...rest}
    />
  );
};
export default ThemedText;
