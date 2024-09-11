import {atom, selectorFamily} from 'recoil';

export const todolist=atom({
    key:"todolist",
    default:[]
})

export const filtersearch=selectorFamily({
    key:"filter",
    get:(x)=>({get})=>{
        const todos=get(todolist);
        const filtered_search=todos.filter((todo)=>{return todo.title.includes(x)||todo.description.includes(x)});
        return filtered_search;
    }
})

