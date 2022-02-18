import { useState } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Name = styled.p`
    background: red;
    color: black;
`;

const Button = styled.button`
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-primary);
  line-height: 2rem;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: .8rem;
  letter-spacing: .1rem;
  cursor: pointer;
  transition: .3s easy-in;

  &:hover {
    color: var(--color-threeth);
    background-color: var(--color-primary)
  }

  &:disabled {
    opacity: 0.7;
  }
`;

const ContNewTask = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px dashed;
  padding-top: 15px;
`;

const ContNewCategory = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const ButtonSmall = styled(Button)`
  padding-left: 7px;
  padding-right: 7px;
  line-height: 1.2rem;
  font-size: .6rem;
`;

const ButtonDelete = styled(ButtonSmall)`
  color: var(--color-error);
  border-color: var(--color-error);

  &:hover {
    color: var(--color-threeth);
    background-color: var(--color-error)
  }
`;

const H1 = styled.h1`
  font-size: 1.5rem;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 20px auto;
`;

const GroupTitleAndNew = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const ContentLists = styled.section`
  border: 1px solid var(--color-secundary);
  margin-top: 20px;
  padding: 10px;
`;

const List = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px dashed var(--color-secundary);

  &.item-enter {
    opacity: 0;
    transform: translate(-10px);
  }

  &.item-enter-active {
    opacity: 1;
    transform: translate(0);
    transition: 500ms ease-in;
  }

  &.item-exit {
    opacity: 1;
    transform: translate(0px);
  }

  &.item-exit-active {
    opacity: 0;
    transform: translate(10px);
    transition: 500ms ease-in;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const Input = styled.input`
  border: 1px solid var(--color-primary);
  line-height: 1.5rem;
  background-color: transparent;
  outline: none;
  padding: 2px 5px;

  &::placeholder {
    color: var(--color-secundary)
  }
`;

const Select = styled.select`
  order: 1px solid var(--color-primary);
  height: 1.9rem;
  background-color: transparent;
  outline: none;
  padding: 2px 5px;

  &::placeholder {
    color: var(--color-secundary)
  }
`;

const SpaceBottom = styled.div.attrs(({ size }) => ({
  size: size || '10px'
}))`
  margin-bottom: ${props => props.size};
`;

const SpaceLeft = styled.div`
  margin-left: 5px;
`;

const SpaceLeftAuto = styled.div`
  margin-left: auto;
`;

const Category = styled.div``;

const Paragraph = styled.label`
  letter-spacing: 1.rem;
  margin-bottom: 0;

  &.completed {
    color: gray;
    text-decoration: line-through;
  }
`;

function App() {

  const NEW_TASK = 'new';
  const DEFAULT_CONFIG_NEW_TASK = {value: '', category: 'DEFAULT', newCategory: ''};
  const [todoList, setTask] = useState({});
  const [newTask, setNewTask] = useState(DEFAULT_CONFIG_NEW_TASK);
  const [toggleTask, setToggleTask] = useState(false);
  const [newCategory, setNewCategory] = useState(false);

  const createNewTask = (event) => {
    setTask(mapperTask(todoList, newTask));
    setToggleTask(false);
    setNewCategory(false);
    setNewTask(DEFAULT_CONFIG_NEW_TASK);
    event.preventDefault();
  }

  const mapperTask = (todoList, newTask) => {
    const category = newCategory ? newTask.newCategory : newTask.category;
    const task = { 
      name: newTask.value, 
      isFavorite: false, 
      isEdit: false, 
      completed: false,
      id: Math.random().toString(36).substr(2, 9)
    }
    return {
      ...todoList, 
      [category]: todoList[category] ? [...todoList[category], task] : [task]
    }
  };

  const handleInputTask = (e) => {
    setNewTask({
      ...newTask,
      value: e.target.value
    })
  }

  const handleSelectTask = (e) => {
    setNewCategory(e.target.value === NEW_TASK);
    setNewTask({
      ...newTask,
      category:  e.target.value.toLowerCase()
    })
  }

  const handleSelectNewCategoryTask = (e) => {
    setNewTask({
      ...newTask,
      newCategory:  e.target.value
    })
  }

  const updateTask = (event, category, id, index) => {
    const children = event.target.parentElement.children || [];
    for(let i = 0; i < children.length; i++) {
        if(children[i].tagName === 'INPUT' && children[i].type === 'text') {
          todoList[category].map((task) => {
            if(task.id === id) return task.name = children[i].value;
          })
          setTask({ ...todoList });
          checkToggleTask(category, id, 'isEdit');
          break;
        }
      }
  }

  const deleteTask = (category, index) => {
    const newList = { ...todoList };
    newList[category].splice(index, 1);
    newList[category].length === 0 && delete newList[category];
    setTask({ ...newList })
  }

  const checkToggleTask = (category, id, property) => {
    todoList[category].map((task) => {
      if(task.id === id) return task[property] = !task[property];
    })
    setTask({...todoList});
  }

  const setFavorite = (category, id, property) => {
    todoList[category]
    .map((task) => {
      if(task.id === id) return task[property] = !task[property];
    })
    todoList[category].sort((a, b) => b.isFavorite - a.isFavorite);
    setTask({...todoList});
  }

  const disabledSave = () => (newTask.category === NEW_TASK && newTask.newCategory === '') || (newTask.value === '' || newTask.category === 'DEFAULT');


  return (
    <Main>

      <GroupTitleAndNew>
        <H1>Todo</H1>
        <Button onClick={() => setToggleTask(!toggleTask)}>new task</Button>
      </GroupTitleAndNew>

      {
        toggleTask && 
        <ContNewTask onSubmit={createNewTask}>
          <Category>
            <Input type="text" placeholder="Name Task" value={newTask.task} onChange={handleInputTask} />
            <SpaceBottom/>
            <ButtonSmall type="submit" disabled={ disabledSave() }>Save</ButtonSmall>  
          </Category>
          <ContNewCategory>
            <Select onChange={handleSelectTask} defaultValue={newTask.category}>
              <option value="DEFAULT" disabled>Choose category ...</option>
              { Object.keys(todoList).map(category => <option value={category} key={category}>{category}</option>)}
              <option value={NEW_TASK}>New Category</option>
            </Select>
            <SpaceBottom/>
            {newCategory && <Input type="text" placeholder="New Category" value={newTask.newCategory} onChange={handleSelectNewCategoryTask} />}
          </ContNewCategory> 
        </ContNewTask>
      }

      { Object.keys(todoList).length > 0 && 
        <ContentLists>
          {
            Object.keys(todoList).map( (category) => 
              <div key={category}>
                { 
                  todoList[category].length > 0 && 
                  <>
                    <h2>{category}</h2>
                    <SpaceBottom />
                    <TransitionGroup component="ul">
                      { 
                        todoList[category].map( (task, i) => 
                          <CSSTransition key={task.id} timeout={700} classNames="item">
                            <List key={task.id}>
                              <input type="checkbox" onChange={ () => checkToggleTask(category, task.id, 'completed') }/>
                              <SpaceLeft />
                              {!task.isEdit && <Paragraph className={task.completed && 'completed'}>{task.name}</Paragraph>}
                              { task.isEdit && 
                                <>
                                  <Input type="text" defaultValue={task.name} /> 
                                  <SpaceLeftAuto />
                                  <ButtonSmall 
                                    type="button"
                                    onClick={ () => checkToggleTask(category, task.id, 'isEdit')}>Cancel</ButtonSmall>
                                  <SpaceLeft />
                                  <ButtonSmall type="button" onClick={(e) => updateTask(e, category, task.id, i)}>Save</ButtonSmall>
                                </>
                              }
                              {!task.isEdit && <SpaceLeftAuto /> }
                              {!task.isEdit && 
                                <ButtonSmall 
                                  type="button" 
                                  onClick={ () => checkToggleTask(category, task.id, 'isEdit')}>Edit</ButtonSmall> }
                              <SpaceLeft />
                              <ButtonSmall 
                                  type="button" 
                                  onClick={ () => setFavorite(category, task.id, 'isFavorite')}>{ task.isFavorite ? '★' : '☆' }</ButtonSmall>
                              <SpaceLeft /> 
                              <ButtonDelete type="button" onClick={ () => deleteTask(category, i) }>x</ButtonDelete>
                            </List>
                          </CSSTransition>
                        )
                      }
                    </TransitionGroup>
                    <SpaceBottom size="20px" />
                  </>
                }
              </div>
            )
          }
        </ContentLists>
      }
    </Main>
  )
}

export default App



// add task for categories ---
// check task ---
// edit and save task ----
// set favorite and order top ----
// adding animations when tasks are deleted --- 
// composability

// deploy netlify or vercel


// light and dark theme (for accessibility)




