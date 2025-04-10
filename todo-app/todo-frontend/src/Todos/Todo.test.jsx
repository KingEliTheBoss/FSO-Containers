import { render, screen } from '@testing-library/react';
import Todo from './Todo';

describe("<Todo/>", () => {
    test("Show todo component", () => {
        const newTodo = { text: "Wow new todo" };
        render(<Todo todo={newTodo} />);
        expect(screen.getByText("Wow new todo")).toBeDefined();
    });
});