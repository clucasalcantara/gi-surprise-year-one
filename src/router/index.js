import { CountdownPage, QuizPage, ErrorPage } from '../pages'

export const routes = [
  {
    path: '/quiz',
    exact: true,
    component: QuizPage,
  },
  {
    path: '/',
    exact: true,
    component: CountdownPage,
  },
  {
    path: '',
    component: ErrorPage,
  },
]
