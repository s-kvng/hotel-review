import { render, screen } from '@testing-library/react';
import FormItem from './FormItem';


test('This Form component should render', ()=>{

    const view = render(<FormItem />);
    expect(view).toMatchSnapshot();
})


test('This Form component should render with label props', ()=>{

    const label = 'Test label';
    render(<FormItem label={label} />);

    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByText(label)).toBeInTheDocument();
    
})