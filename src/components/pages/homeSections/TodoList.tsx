'use client';
import { useGetTodosQuery, useRemoveTodoMutation } from '@/redux/api/todo';
import scss from './TodoList.module.scss';

const TodoList = () => {
	const { data } = useGetTodosQuery();
	const [removeTodo] = useRemoveTodoMutation();
	return (
		<section className={scss.TodoList}>
			<div className="container">
				<div className={scss.content}>
					<h3>TodoList</h3>
					<div>
						{data?.map((item) => (
							<div key={item._id}>
								<img src={item.img} alt="img" width={200} />
								<h4>{item.title}</h4>
								<button onClick={() => removeTodo(item._id!)}>REMOVE</button>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TodoList;
