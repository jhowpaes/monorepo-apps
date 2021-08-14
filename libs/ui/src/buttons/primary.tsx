import React from 'react'
import { Button, ButtonProps } from 'react-native'

export function PrimaryButton({ title, onPress }: ButtonProps) {
  return (
    <Button
      title={title}
      onPress={onPress}
      color="lightsalmon"
    />
  )
}
