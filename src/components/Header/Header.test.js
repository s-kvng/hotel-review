import { render } from "@testing-library/react";
import Header from "./Header"; 

test('The Header component should render', ()=>{

    const view = render(<Header />);
    expect(view).toMatchSnapshot();
})