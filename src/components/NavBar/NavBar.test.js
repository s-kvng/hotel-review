import { render, screen , fireEvent } from '@testing-library/react';
import NavBar from './NavBar';



test('The Navbar component should render', ()=>{

    const view = render(<NavBar />);
    expect(view).toMatchSnapshot();  
})


test('The Navbar component should render a title', ()=>{

    // const view = render(<NavBar title='Test application' />);
    const title = "Test application";

    render(<NavBar title={title}/>);

    //We've used the "getByRole" React Testing Library method to find the Title component in the NavBar component.
    //the "toHaveTextContent" method to check whether the text inside Title is equal to our prop
    expect(screen.getByRole('heading')).toHaveTextContent(title);
    
})


test('The NavBar component should respond to button clicks', ()=>{

    const mockFunction = jest.fn();
    render(<NavBar goBack={mockFunction} openForm={mockFunction}/>);

    //Checking for the goBack prop
    /*a click on the back button in NavBar will be simulated,
        and Jest will check whether the mocked function is being called */
    fireEvent.click(screen.getByText('< Go Back'));
    expect(mockFunction).toHaveBeenCalled();

    //Testing for the openForm prop
    /*The mocked function for both the goBack and openForm props are the same, so we
        need to check whether this function is called twice after clicking the open form button */
    fireEvent.click(screen.getByText('+ Add Review'));
    expect(mockFunction).toHaveBeenCalledTimes(2);
})