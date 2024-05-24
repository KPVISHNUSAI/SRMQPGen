// src/pages/QuestionPage.js
import React from 'react';
import QuestionList from '../components/Questions/QuestionList';
import QuestionForm from '../components/Questions/QuestionForm';
import Header from '../components/Header';

const QuestionPage = () => {
  return (
    <div>
      <Header />
      <QuestionForm />
      <QuestionList />
    </div>
  );
};

export default QuestionPage;
