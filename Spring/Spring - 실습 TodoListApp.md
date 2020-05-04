## 0. 설정 및 목표

### 1) 목표 : Todo-list App

* DB
* Client

* Server

```
1. Boot project 생성
2. Dependency
	1) web
	2) jpa
	3) h2
    4) devtools
3. Entity 클래스 작성
	1) todo.java
4. Repository interface 작성
	1) todoRepository.java
5. RestController 클래스 작성
	1) todoRestController.java
```

### 2) 설정

## 1. DB

## 2. Client

> todolist

### 0) 설정 및 개념

* 설정

```
1. redux
npm i --save redux

2. React-redux
npm i --save react-redux

3. axios
npm i --save axios

4. thunk 설치
npm i --save redux-thunk

5. redux-devtools : store 생성시 redux-devtools 적용

npm install --save-dev redux-devtools-extension

6. src directory 생성
	1) actions
		(1) ActionTypes.js
		(2) Action.js
	2) reducers
		(2)
```

* 개념

```
1. Axios : HTTP 클라이언트 라이브러리, 데이터를 외부에서 가져오고 요청 취소와 typescript를 지원한다.

2. redux-thunk middleware
	1) Middleware : 액션이 디스패치되어 리듀서에서 이를 처리하기 전에 사전에 지정된 작업들을 설정해 해당 작업을 수행한다. 
	2) thunk : 특정 작업을 나중에 하도록 미루기 위해서 함수 형태로 감싼 것
	
3. Express : Node 웹서버에서 간단한 REST API를 구현할 수 있는 웹 프레임워크.

4. CORS, Cross-Origin Resource Sharing : Single Origin Policy(동일 출처 원칙)을 우회하기 위한 방법
```

### 1) src/actions/

* index.js

```js
import axios from 'axios';

//Action Type 정의
export const FETCH_TODOS = "FETCH_TODOS";

const apiUrl = 'http://localhost:8000/api/todos';

export const fetchAllTodos = () => {
    return (dispatch) => {
        axios.get(apiUrl)
        .then(res => {
            dispatch({
            // 요청이 성공하면, 서버 응답내용을 payload로 설정하여
            // FETCH_TODOS 액션을 디스패치 합니다.
            type: FETCH_TODOS,
            payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
            throw (error);
        })
    }
}
```



### 2) src/components/

* Form.css

```css
.form {
    display: flex;
}
.form input {
    flex: 1; /* 버튼을 뺀 빈 공갂을 모두 찿워줍니다 */
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #c5f6fa;
}
.create-button {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
    background: #22b8cf;
    border-radius: 3px;
    color: white;
    font-weight: 600;
    cursor: pointer;
}
.create-button:hover {
    background: #3bc9db;
}
```

* Form.js

```js
import React, { Component } from 'react';
import './Form.css'
class Form extends Component {
    render() {
        const {todo, myChange, myKeyPress, myCreate} = this.props;
        return (
            <div className="form">
                <input value={todo} onChange={myChange}  onKeyPress={myKeyPress}/>
                <div className="create-button" onClick={myCreate}>
                    추가
                </div>
            </div>
        );
    }
}


export default Form;
```

* TodoItem.css

```css
.todo-item {
    padding: 1rem;
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    cursor: pointer;
    transition: all 0.15s;
    user-select: none;
}
.todo-item:hover {
    background: #e3fafc;
}
/* todo-item 에 마우스가 있을 때 .remove 보이기 */
.todo-item:hover .remove {
    opacity: 1;
}
/* todo-item 사이에 윗 테두리 */
.todo-item + .todo-item {
    border-top: 1px solid #f1f3f5;
}
.remove {
    margin-right: 1rem;
    color: #e64980;
    font-weight: 600;
    opacity: 0;
}
.todo-text {
    flex: 1; /* 체크, 엑스를 제외한 공간 다 찿우기 */
    word-break: break-all;
}
.checked {
    text-decoration: line-through;
    color: #adb5bd;
}
.check-mark {
    font-size: 1.5rem;
    line-height: 1rem;
    margin-left: 1rem;
    color: #3bc9db;
    font-weight: 800;
}
```

* TodoItem.js

```js
import React, { Component } from 'react';
import './TodoItem.css';

class Todoitem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
        }
        
    render() {
        const {todoText, checked, id, myToggle, myRemove} = this. props;
        return (
            <div className="todo-item" onClick={()=> myToggle(id)}>
                <div className="remove" onClick={(e)=> {
                    //부모 태그로 Bubble up(이벤트 전파) 되지 않기 위해 사용 
                    e.stopPropagation();
                    myRemove(id);
                }}>
                    &times;
                </div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{todoText}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default Todoitem;
```

* TodoItemList.js

```js
import React,{Component} from 'react';
import TodoItem from './Todoitem'


class TodoItemList extends Component{
    //life Cycle 메서드의 overringd : render() 메서드의 호출을 줄일 수 있다
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }
    render(){
        const{todos, myToggle, myRemove} = this.props;
        const todoList = todos.map(({id,text,checked})=>(
            <TodoItem
            id={id}
            todoText={text}
            checked={checked}
            myToggle = {myToggle}
            myRemove = {myRemove}
            key={id}
            />
        )); 
        return (
            <div>
                {todoList}
            </div>
        );
    }

};

export default TodoItemList;
```

* TodoListTemplate.css

```css
.todo-list-template {
    background: white;
    width: 512px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin: 0 auto; /* 페이지 중앙 정렧 */
    margin-top: 4rem;
    }
.title {
    padding: 2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 100;
    background: #22b8cf;;
    color: white;
}
.form-wrapper {
    padding: 1rem;
    border-bottom: 1px solid #22b8cf;
}
.todos-wrapper {
    min-height: 5rem;
}
```

* TodoListTemplate.js

```js
import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate =({form,children}) =>{
// function TodoListTemplate(props) {
    return (
        <div className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <div className="form-wrapper">
                {form}
            </div>
            <div className="todos-wrapper">
                {children}
            </div>
        </div>
    );
}

export default TodoListTemplate;
```

### 3) src/reducers/

* index.js

### 4) src/

* App.js

```js
import React, { Component } from 'react';
import Form from './components/Form';
import TodoListTemplate from './components/TodoListTemplate.js';
import TodoItemList from './components/TodoItemList';


const initialTodos = new Array(500).fill(0).map(
  (item, idx) => ({ id: idx, text: `일정 ${idx}`, checked: true })
  );
  
class App extends Component {
  id=3;
  //상태변수
  state={
      todo:'',
      todos:initialTodos,
      // todos:[
        
      //     // {id:0,checked:false,text:'todo1'},
      //     // {id:1,checked:true,text:'todo2'},
      //     // {id:2,checked:false,text:'todo3'},
      // ]
  }

  //Event handler function
  handleChange = (e) =>{
      this.setState({
          todo:e.target.value
      });
  };
  handleCreate = () => {
      const {todo, todos} = this.state;
      this.setState({
          todos: todos.concat({id:this.id++,text:todo,cheched:false}),
          todo:''
      })
  };
  handleKeyPress = (e) => {
      if(e.key === 'Enter'){
          this.handleCreate();
      }
  };
  handleRemove = (id)=>{
    const{todos} = this.state;
    this.setState({
      todos:todos.filter(todo=> todo.id !== id)
    });
  }
  handleToggle=(id) =>{
    const{todos} = this.state;
    // 파라미터로 받은 id 를 가지고 몇번째 Item인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체
    const copyTodos = [...todos]; // 배열을 복사
    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    copyTodos[index] = {
    ...selected,
    checked: !selected.checked
    };
    this.setState({
    todos: copyTodos
    });
  }
  render() {
    const{todo, todos} = this.state;
    const{handleCreate, handleChange, handleKeyPress, handleRemove, handleToggle} = this;
    return (
      <TodoListTemplate form={<Form todo={todo}
                                myChange ={handleChange}
                                myCreate ={handleCreate}
                                myKeyPress ={handleKeyPress}
                                
      />}>
        <TodoItemList todos={todos} myRemove={handleRemove} myToggle = {handleToggle}/>
      </TodoListTemplate>
    );
  }
}

export default App;
```

### 5) client/

* .env.development

```

```



* .env.production

```

```



## 3. Server

### 1) entity

* Todo.java

```

```



### 2) Repository

* TodoRepository.java

```

```



### 3) RestCotroller

* TodoRestController.java

```

```



