import * as React from 'react'
import { View, SafeAreaView, Dimensions } from 'react-native'
import styled from 'styled-components'

const { width } = Dimensions.get('window')

const Wrapper = styled.View`
  flex-direction: row;
  padding: 16px;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  width: ${width};
`

const TextWrapper = styled.View`
  flex-direction: column;
`

const HeaderSmallText = styled.Text`
  color: #c0c0c0;
  font-size: 20;
  font-weight: 700;
`

const HeaderLargeText = styled.Text`
  color: black;
  font-size: 28;
  font-weight: 700;
`

const Avatar = styled.TouchableOpacity`
  width: 60;
  height: 60;
  border-radius: ${60 / 2};
  background-color: #404040;
  align-items: center;
  justify-content: center;
`

const Initials = styled.Text`
  color: white;
  font-size: 24;
  font-weight: 700;
`

interface Props {
  description: string
  title: string
  userInitials: string
  onClickAvatar?: () => void
}

const Header = ({ title, description, userInitials, onClickAvatar }: Props) => (
  <Wrapper>
    <TextWrapper>
      <HeaderSmallText>{description.toUpperCase()}</HeaderSmallText>
      <HeaderLargeText>{title}</HeaderLargeText>
    </TextWrapper>
    <Avatar onPress={onClickAvatar}>
      <Initials>{userInitials}</Initials>
    </Avatar>
  </Wrapper>
)

export default Header
