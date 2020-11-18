import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/56047758?v=4"
            alt="Matheus Foganholo"
          />
          <div>
            <strong>MatheusFoganholo/ng-agenda</strong>
            <p>
              A single page application from a simple schedule that stores the
              contacts name, address and phone number locally. Created with
              Angular.
            </p>
          </div>

          <FiChevronRight size={30} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
