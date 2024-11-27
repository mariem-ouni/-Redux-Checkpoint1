import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  // Utilisation de noms de variables en camelCase pour suivre les conventions JavaScript
  const [filter, setFilter] = useState('all');

  // Récupération des tâches depuis le state Redux
  const tasks = useSelector((state) => state.tasks); // Assurez-vous que le state est correctement configuré

  // Application des filtres en fonction de l'état sélectionné
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.isDone;
    if (filter === 'incomplete') return !task.isDone;
    return true; // Filtre "all" (toutes les tâches)
  });

  return (
    <div>
      {/* Boutons pour changer le filtre */}
      <div>
        <button onClick={() => setFilter('all')}>Toutes</button>
        <button onClick={() => setFilter('completed')}>Terminées</button>
        <button onClick={() => setFilter('incomplete')}>Non terminées</button>
      </div>
      
      {/* Liste des tâches filtrées */}
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
