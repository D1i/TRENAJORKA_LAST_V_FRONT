import { ExercisesList } from '../../components/fieldList';

export const ExercisesListPage = () => {
  return (
      <div>
        <ExercisesList exercisesListObj={[
            {fieldName: '1', fieldContent: '1'},
            {fieldName: '2', fieldContent: '2'},
            {fieldName: '3', fieldContent: '3'},
            {fieldName: '4', fieldContent: '4'}
            ]} />
    </div>
  );
}
