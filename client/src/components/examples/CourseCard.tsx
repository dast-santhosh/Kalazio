import CourseCard from '../CourseCard';
import courseImage from '@assets/generated_images/Bharatanatyam_classical_dance_performance_99c7d39c.png';

export default function CourseCardExample() {
  return (
    <div className="p-8 bg-background">
      <CourseCard
        title="Bharatanatyam: The Dance of Expressions"
        instructor="Guru Lakshmi Iyer"
        duration="8 weeks"
        students={342}
        image={courseImage}
        category="Classical Dance"
        onClick={() => console.log('Course clicked')}
      />
    </div>
  );
}
