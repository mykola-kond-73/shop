import {render,screen} from '@testing-library/react'
import { AvatarB } from './Avatar'

describe('Avatar component testing',()=>{
    test('with props avatar',()=>{
        render(<AvatarB avatar="test/url/with/avatar"/>)
        const ImageAntdComponent=screen.getByTestId('image-antd-component')
        const AvatarAntdComponent=screen.queryByTestId('avatar-antd-component')

        expect(ImageAntdComponent).toBeInTheDocument()
        expect(AvatarAntdComponent).not.toBeInTheDocument()
    })
})