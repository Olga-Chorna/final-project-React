import React, { useEffect, useState } from 'react';
import { useLoadData } from '../../../hooks';

const CommentsLoader = () => {

  const { data, isLoading, error } = useLoadData();
  console.log(data)

  // const toDoList = data.map(task => (
  //   <li key={task.id}>
  //     <h4>{task.value}</h4>
  //   </li>
  // ))
  return (
    <div>
      To DOOOOOOO!!!
      {/* <h2>То DO:</h2>
      {isLoading && <div>LOADING...</div>}
      {error && <div>ERROR</div>}
      {toDoList} */}
    </div>
  );
}

export default CommentsLoader;