import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
// Routing
import { routes } from './router'

export const App = () => <Router>{renderRoutes(routes)}</Router>
