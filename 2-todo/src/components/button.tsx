import type React from 'react'
import Icon from './icon'
import { cva, type VariantProps } from 'class-variance-authority'
import Text from './text';

export const buttonVariants = cva(`
  flex items-center justify-center cursor-pointer
  transition rounded-lg group gap-2
  `,
  {
    variants: {
      variant: {
        primary: 'bg-gray-200 hover:bg-pink-light'
      },
      size: {
        md: 'h-14 px-5 py-4'
      },
      disabled: {
        true: 'opacity-50 pointer-events-none'
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false
    }
  }
);

export const buttonTextvariants = cva('', {
  variants: {
    variant: {
      primary: 'text-gray-400'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const buttonIconVariants = cva('transition', {
  variants: {
    variant: {
      primary: 'fill-pink-base'
    },
    size: {
      md: 'w-5 h-5'
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

// Omit -> bloqueia o size e o disabled do button nativo do react p não conflitar c o size e o disabled do buttonVariant
interface ButtonProps
  extends
    Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonVariants> {
      icon?: React.ComponentProps<typeof Icon>['svg']
    }

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  icon: IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        variant,
        size,
        disabled,
        className
      })}
      {...props}
    >
      {IconComponent && (
        <Icon
          svg={IconComponent}
          className={buttonIconVariants({ variant, size })}
        />
      )}
      <Text
        variant='body-md-bold'
        className={buttonTextvariants({variant})}
      >
        {children}
      </Text>
    </button>
  )
}
