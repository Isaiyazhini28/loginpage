import React from 'react';
import { useQuery } from 'react-query';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  return response.json();
};

const TodosList: React.FC = () => {
  const { data, isLoading, error } = useQuery<Todo[]>('todos', fetchTodos);

  if (isLoading) return <div>Loading...</div>;

  if (error) {
    const errorMessage = (error as Error).message || 'An error occurred';
    return <div>Error: {errorMessage}</div>;
  }
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {data?.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
