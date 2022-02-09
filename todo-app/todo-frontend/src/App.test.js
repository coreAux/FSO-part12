import { render, screen } from '@testing-library/react';
import App from './App';
import Todo from './Todos/Todo';

test('renders title Todos', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todos/i);
  expect(linkElement).toBeInTheDocument();
});

const todo = { text: "This is something to do...", done: false }

const onClickDelete = jest.fn()
const onClickComplete = jest.fn()

test('exercise 12.14', () => {

  const component = render(
    <Todo
      todo={todo}
      onClickDelete={onClickDelete}
      onClickComplete={onClickComplete}
    />
  )

  expect(component.container).toHaveTextContent("This is something to do...")
  expect(component.container).not.toHaveTextContent("It's all wrong!")
})
