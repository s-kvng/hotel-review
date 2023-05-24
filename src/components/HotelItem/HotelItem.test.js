import { render , screen } from "@testing-library/react";
import HotelItem from "./HotelItem";

test('The HotelItem component should render', ()=>{

    // const view = render(<HotelItem />);
    // expect(view).toMatchSnapshot();

    const data = {
        title : 'Sample Hotel',
        thumbnail : 'sample-image.jpg'
    }

    render(<HotelItem data={data}/>)

    expect(screen.getByRole('heading')).toHaveTextContent(data.title);
    expect(screen.getByRole('img')).toHaveAttribute('src', data.thumbnail);

})