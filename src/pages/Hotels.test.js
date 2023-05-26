import Hotels from './Hotels';
import HotelsContext from '../context/HotelsContext';
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';


/* This test verifies that the Hotels component properly 
renders the 'Loading...' message when the loading value 
is true in the provided context. */

test('The Hotels component should render', async () => {

    /*With this test, we've tested both the context in the Hotels component and the
useEffect Hook to fetch hotel data in that function.*/

    const mockFunction = jest.fn();

    const wrapper = ({ children }) => (

        <HotelsContext.Provider
            value={{
                hotels: [],
                loading: true,
                error: '',
                fetchHotels: mockFunction,
            }} >

            {children}

        </HotelsContext.Provider>
    );

    render(<Hotels />, { wrapper });


    /* The expect statement uses await screen.findByText('Loading...') 
    to wait for the text 'Loading...' to be present in the rendered output. 
    This is an asynchronous assertion that ensures the component 
    displays the 'Loading...' message when it is initially rendered.*/
    expect(await screen.findByText('Loading...')).toBeVisible();

    await waitFor(()=> expect(mockFunction).toHaveBeenCalledTimes(1));
    
});



//integration test
test('The Hotel component should render a list ', async () => {

    const wrapper = ({ children }) => (

       <BrowserRouter>  
       <HotelsContext.Provider
            value={{
                loading: false,
                error: '',
                hotels: [
                    {
                        id: 1, title: 'Test hotel 1',
                        thumbnail: ''
                    },
                    {
                        id: 2, title: 'Test hotel 2',
                        thumbnail: ''
                    },
                ],
                fetchHotels: jest.fn(),

            }}>

            {children}

        </HotelsContext.Provider>  
       </BrowserRouter>

    )


    render(<Hotels />, { wrapper });

    /*The queryByText method returns null if the element 
    with the specified text is not found. So, toBeNull() 
    is used to assert that the element is not present.*/
    expect(screen.queryByText('loading...')).toBeNull();


    /*expect statement uses screen.getAllByRole('link').length to 
    get all the elements with the role "link" in the rendered output 
    and checks if their length is equal to 2.*/
    expect(screen.getAllByRole('link').length).toBe(2);
})
