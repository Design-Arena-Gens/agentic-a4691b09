'use client';

import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const quizData: Question[] = [
  {
    question: "Что такое искусственный интеллект (ИИ)?",
    options: [
      "Компьютерная программа для игр",
      "Система, способная выполнять задачи, требующие человеческого интеллекта",
      "Робот с человеческим мозгом",
      "Только программы для распознавания лиц"
    ],
    correct: 1,
    explanation: "ИИ - это область компьютерных наук, которая создаёт системы, способные выполнять задачи, обычно требующие человеческого интеллекта: обучение, распознавание образов, принятие решений."
  },
  {
    question: "Что такое машинное обучение?",
    options: [
      "Обучение людей работе с машинами",
      "Способность компьютера учиться на данных без явного программирования",
      "Программирование роботов",
      "Изучение механики машин"
    ],
    correct: 1,
    explanation: "Машинное обучение - это подраздел ИИ, где системы автоматически учатся и улучшаются на основе опыта (данных) без явного программирования каждого шага."
  },
  {
    question: "Что такое нейронная сеть?",
    options: [
      "Сеть компьютеров в больнице",
      "Математическая модель, вдохновлённая работой человеческого мозга",
      "Интернет-соединение для медицинских устройств",
      "Провода в компьютере"
    ],
    correct: 1,
    explanation: "Нейронная сеть - это вычислительная модель, состоящая из связанных узлов (нейронов), которая обрабатывает информацию подобно тому, как это делает человеческий мозг."
  },
  {
    question: "Что такое ChatGPT?",
    options: [
      "Видеоигра",
      "Языковая модель ИИ для генерации текста и диалогов",
      "Социальная сеть",
      "Программа для редактирования фото"
    ],
    correct: 1,
    explanation: "ChatGPT - это большая языковая модель от OpenAI, которая может генерировать текст, отвечать на вопросы и вести диалоги на естественном языке."
  },
  {
    question: "Для чего используется ИИ сегодня?",
    options: [
      "Только для научных исследований",
      "Только для военных целей",
      "Медицина, транспорт, образование, развлечения и многое другое",
      "Только для создания роботов"
    ],
    correct: 2,
    explanation: "ИИ широко применяется во многих областях: медицинская диагностика, беспилотные автомобили, персональные ассистенты, рекомендательные системы, перевод языков и многое другое."
  }
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (selectedOption: number) => {
    setSelectedAnswer(selectedOption);
    setShowExplanation(true);

    if (selectedOption === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        maxWidth: '700px',
        width: '100%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#667eea',
          textAlign: 'center',
          marginBottom: '10px',
          marginTop: 0
        }}>
          🤖 ИИ Викторина
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#666',
          marginBottom: '30px',
          fontSize: '1.1rem'
        }}>
          Что вы знаете об искусственном интеллекте?
        </p>

        {showScore ? (
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '20px' }}>
              Ваш результат: {score} из {quizData.length}
            </h2>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
              {score === quizData.length ? '🏆' : score >= quizData.length * 0.7 ? '🎉' : score >= quizData.length * 0.5 ? '👍' : '📚'}
            </div>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
              {score === quizData.length
                ? 'Отлично! Вы эксперт в ИИ!'
                : score >= quizData.length * 0.7
                ? 'Очень хорошо! Вы хорошо разбираетесь в ИИ!'
                : score >= quizData.length * 0.5
                ? 'Неплохо! Продолжайте изучать ИИ!'
                : 'Продолжайте учиться, у вас всё получится!'}
            </p>
            <button
              onClick={restartQuiz}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                padding: '15px 40px',
                fontSize: '1.1rem',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Начать заново
            </button>
          </div>
        ) : (
          <>
            <div style={{
              marginBottom: '30px',
              padding: '15px',
              background: '#f8f9fa',
              borderRadius: '10px'
            }}>
              <span style={{ color: '#667eea', fontWeight: 'bold', fontSize: '1.1rem' }}>
                Вопрос {currentQuestion + 1} из {quizData.length}
              </span>
              <div style={{
                background: '#e9ecef',
                height: '8px',
                borderRadius: '4px',
                marginTop: '10px',
                overflow: 'hidden'
              }}>
                <div style={{
                  background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                  height: '100%',
                  width: `${((currentQuestion + 1) / quizData.length) * 100}%`,
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>

            <h2 style={{
              fontSize: '1.5rem',
              color: '#333',
              marginBottom: '25px',
              lineHeight: '1.6'
            }}>
              {quizData[currentQuestion].question}
            </h2>

            <div style={{ marginBottom: '20px' }}>
              {quizData[currentQuestion].options.map((option, index) => {
                let buttonStyle: React.CSSProperties = {
                  width: '100%',
                  padding: '15px 20px',
                  marginBottom: '12px',
                  fontSize: '1.1rem',
                  borderRadius: '10px',
                  border: '2px solid #e9ecef',
                  background: 'white',
                  cursor: selectedAnswer === null ? 'pointer' : 'default',
                  textAlign: 'left',
                  transition: 'all 0.2s',
                  fontWeight: '500'
                };

                if (showExplanation) {
                  if (index === quizData[currentQuestion].correct) {
                    buttonStyle = {
                      ...buttonStyle,
                      background: '#d4edda',
                      borderColor: '#28a745',
                      color: '#155724'
                    };
                  } else if (index === selectedAnswer) {
                    buttonStyle = {
                      ...buttonStyle,
                      background: '#f8d7da',
                      borderColor: '#dc3545',
                      color: '#721c24'
                    };
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => selectedAnswer === null && handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                      if (selectedAnswer === null) {
                        e.currentTarget.style.borderColor = '#667eea';
                        e.currentTarget.style.background = '#f8f9fa';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedAnswer === null) {
                        e.currentTarget.style.borderColor = '#e9ecef';
                        e.currentTarget.style.background = 'white';
                      }
                    }}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div style={{
                marginTop: '25px',
                padding: '20px',
                background: '#e7f3ff',
                borderRadius: '10px',
                borderLeft: '4px solid #667eea'
              }}>
                <h3 style={{ marginTop: 0, color: '#667eea', fontSize: '1.2rem' }}>
                  💡 Объяснение:
                </h3>
                <p style={{ margin: 0, color: '#333', lineHeight: '1.6', fontSize: '1.05rem' }}>
                  {quizData[currentQuestion].explanation}
                </p>
                <button
                  onClick={handleNextQuestion}
                  style={{
                    marginTop: '20px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '12px 30px',
                    fontSize: '1.05rem',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  {currentQuestion === quizData.length - 1 ? 'Показать результат' : 'Следующий вопрос →'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
