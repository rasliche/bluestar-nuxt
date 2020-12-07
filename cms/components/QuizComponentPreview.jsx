import React, { Component } from "react";
import Quiz from '../../components/Quiz.vue'

export default class TestComponent extends Component {
  render() {
    console.log('Quiz Preview Loaded')
    return <Quiz />
  }
}
