# react 2일차 정리

* `.gitignore` : github에 해당 폴더를 올리는 경우 폴더에서 올리고 싶지 않은 파일목록을 정리한 텍스트 파일이다. 





#### 1. App.js

경로 : ...\my-app\App.js

```js
import React, { Component} from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneList from './components/PhoneList';

class App extends Component {
  id = 1;
  state ={
    contacts: [
      {
        id: 0,
        name: 'admin',
        phone: '010-1111-2222'
      }
    ]
  }

  handleCreate = (data) => {
    //console.log(data);
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.concat({
        id:this.id++,
        ...data})
      })
    }
  handleRemove = (selected_id) => {
    const { contacts }= this.state;
      this.setState({
        contacts: contacts.filter(
            info => info.id !== selected_id
        )
    });
  }
  handleUpdate = (selected_id,data) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.map(
        item => item.id === selected_id
                    ? {...item, ...data}
                    : item
      )
    })

  }
  render(){
    const { contacts } = this.state;
    return (
      <div className ="App-header">
        <PhoneForm
          onCreate={this.handleCreate}/>
        <PhoneList 
          data={this.state.contacts}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}/>
      </div>
    )
  }
}

export default App;

```



#### 2. PhoneForm.js

경로 : ...\my-app\src\phoneForm.js

```js
import React, { Component } from 'react';

class PhoneForm extends Component {
    
    state = {
        name: '',
        phone : ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit =(e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone : '' 
        })
    }

    render(){
        return (
            <form 
            onSubmit = {this.handleSubmit}
            >
                <input
                    value ={this.state.name}
                    placeholder='이름을 입력하세요'
                    onChange={this.handleChange}
                    name='name'/>
                <input
                    value = {this.state.phone}
                    placeholder='전화번호를 입력하세요'
                    onChange={this.handleChange}
                    name='phone'/>                   
                <button type="submit">
                    등록
                </button>
            </form>
        )
    }
}

export default PhoneForm;
```



#### 3. PhoneItem.js

경로 : ...\my-app\src\PhoneItem.js

```js
import React, { Component} from 'react';

class PhoneItem extends Component{

    state ={
        eidtable: false,
        name: '',
        phone: ''
    }

    handleRemove = () =>{
        const {info,onRemove} =this.props;
        onRemove(info.id);
    }

    componentDidUpdate(preProps, preState){
        const {info, onUpdate} = this.props;
        console.log(preState.editable + "/" + this.state.editable);
        if (!preState.editable && this.state.editable){
            this.setState({
                name : info.name,
                phone: info.phone
            })
        }

        if(preState.editable && this.state.editable){
            onUpdate(info.id,{
                name: this.state.name,
                phone: this.state.phone
            });
        }
    }

    handleUpdate = () => {
        const { editable } = this.state;
        this.setState({
            editable: true
        })
    }

    handleChange = (e) => {
        const { name, value } =e.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        
        const css = {
            border: '1px solid black',
            padding: '8px',
            margin: '5px'
        };

        const{ editable } = this.state;
        if (editable){
            return (
                <div style={css}>
                    <div>
                        <input 
                        value={this.state.name} 
                        name ="name"
                        placeholder ="이름을 입력하세요."
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input 
                        value={this.state.phone} 
                        name ="phone"
                        placeholder ="연락처를 입력하세요."
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
            );
        }
        const {name, phone} = this.props.info;

        return(
            <div style={css}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleUpdate}>적용</button>
            </div>
            )
    }

}

export default PhoneItem;
```

#### 4. PhoneList.js

경로 : ...\my-app\src\PhoneList.js

```js
import React, {Component} from 'react';
import PhoneItem from './PhoneItem';

class PhoneList extends Component{
    render(){
        const {data, onRemove, onUpdate} = this.props;

        const list = data.map(value => 
            <PhoneItem 
                key={value.id} 
                info={value}
                onRemove={onRemove}
                onUpdate={onUpdate}/>
            );

        return(
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneList;
```

