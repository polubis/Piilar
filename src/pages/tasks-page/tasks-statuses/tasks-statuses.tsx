import { Box, Chip, Theme, makeStyles } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { TaskStatusEntity } from 'models/entities';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    display: 'flex',
    flexFlow: 'wrap'
  },

  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1)
  },

  loader: {
    background: theme.palette.grey[300],
    width: '80px'
  }
}));

interface Props {
  tasksStatuses: TaskStatusEntity[];
  isLoadingTasksStatuses: boolean;
  onTaskStatusClick(taskStatus: TaskStatusEntity): void;
}

const TasksStatuses = ({ tasksStatuses, isLoadingTasksStatuses, onTaskStatusClick }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {isLoadingTasksStatuses
        ? Array.from({ length: 5 }, (_, idx) => (
            <Chip key={idx} className={[classes.loader, classes.chip].join(' ')} />
          ))
        : tasksStatuses.map(taskStatus => (
            <Chip
              key={taskStatus.id}
              className={classes.chip}
              label={taskStatus.name}
              style={taskStatus.theme}
              deleteIcon={<EditIcon style={{ color: taskStatus.theme.color }} />}
              onDelete={() => onTaskStatusClick(taskStatus)}
            />
          ))}
    </Box>
  );
};

export default TasksStatuses;
