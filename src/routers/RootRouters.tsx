import { CharacterDetailView, CharacterList } from 'components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RouteParams, ROUTES } from 'routers/constants';

export const RootRouters = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.CHARACTERS} element={<CharacterList />} />
      <Route path={`${ROUTES.CHARACTERS}/:${RouteParams.CHARACTER_ID}`} element={<CharacterDetailView />} />
      <Route path='*' element={<Navigate to={ROUTES.CHARACTERS} replace />} />
    </Routes>
  </BrowserRouter>
);
