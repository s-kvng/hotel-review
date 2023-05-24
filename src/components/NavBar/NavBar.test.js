import { render } from '@testing-library/react';
import NavBar from './NavBar';

test('The Navbar component should render', ()=>{

    const view = render(<NavBar />);
    expect(view).toMatchSnapshot();
    
})

test('The Navbar component should render a title', ()=>{

    const view = render(<NavBar title='Test application' />);
    expect(view).toMatchSnapshot();
    
})