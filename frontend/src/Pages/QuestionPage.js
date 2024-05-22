// src/pages/QuestionPage.js
import React from 'react';
import QuestionList from '../components/Questions/QuestionList';
import QuestionForm from '../components/Questions/QuestionForm';

const QuestionPage = () => {
  return (
    <div>
      <QuestionForm />
      <QuestionList />
    </div>
  );
};

export default QuestionPage;
