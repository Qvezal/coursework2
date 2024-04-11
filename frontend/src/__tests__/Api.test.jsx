import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import axios from 'axios'
 
describe('Page', () => {
  it('find a budget', () => {

    const config = {
      headers: {
        "Authorization": "Bearer " + "835f689817f379df45787ceab802a6a408d9f75220bd811a7a0afc30031d8c00ebd3b25d430ffa18990e75fc3c35b39cf823b8d058a120d8b8260ae7c8f1e9bcee5b2e373aa57d6c87ec79d41a370e05d62ec9d5c57ea43c1428acecb4f311387806db15185af8cf67c5e103dbd2a2a68705d878f714bd01b0edfcd66d4bd3d8"
        ,
        "Content-Type": "application/json"
      }
    }

    const heading = axios.get(`http://127.0.0.1:1337/api/budget`, config).then(res => {
      const budget = response.data.data.attributes.Budget;

      expect(budget).isNumber()
    })
  })
})