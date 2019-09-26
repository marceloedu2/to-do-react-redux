import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const FormGroup = styled.form`
  display: inline;
  align-items: right;
`
const InputForm = styled.input`
  /* position: relative; */
  display: block;
  margin: 0;
  padding: 5px;
  color: black;
  width: 100%;
  font-family: black;
  font-size:20px;
  font-weight: black;
  border: none;
  border-radius: 0.4rem;
  transition: box-shadow var(--transitionDuration);
  &::placeholder{
    color: #B0BEC5;
  };
  &:focus{
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem var(--colorPrimary600);
  }
`
const ButtonFrom = styled.button`
  display:inline-block;
  padding:0.35em 1.2em;
  text-decoration: none;
  border:0.1em solid #FFFFFF;
  background-color: #282c34;
  margin:0 0.3em 0.3em 0;
  border-radius:0.32em;
  box-sizing: border-box;
  text-decoration:none;
  align-items:right;
  font-weight:400;
  color:#FFFFFF;
  text-align:center;
  transition: all 0.2s;
  &:hover{
    color:#000000;
    font-weight:400;
    background-color:#FFFFFF;
  }
  &:focus{
    outline-style: none;
  }
`
const UlGroup = styled.ul`
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  /* color: #fff;
  background-color: #007bff;
  border-color: #007bff; */
`
const LiItem =styled.li`

`

export {
  MainDiv,
  FormGroup,
  InputForm,
  ButtonFrom,
  UlGroup,
  LiItem
}