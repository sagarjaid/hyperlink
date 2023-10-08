import React from 'react';
import Footer from '@/components/Footer';
import SEOMeta from '@/components/SEOMeta';
import Nav from '@/components/Nav';

const TC = () => {
  return (
    <>
      <SEOMeta
        title='Refund Policy — Hyperlink School'
        description='Switch to High Paying IT Jobs, Learn the High Paying Skills of Tomorrow! No Software/IT background required'
        slug='tc'
      />

      <main className='m-auto flex max-w-6xl flex-col px-4'>
        <Nav />
        <div className='flex flex-col items-start justify-center gap-6 px-4 py-10 '>
          <div className='flex flex-col gap-2 text-2xl font-medium'>
            Hyperlink School Technical Courses Refund Policy
            <div className='text-sm'>Updated on 1 September, 2023</div>
          </div>

          <p>
            <strong>Introduction:</strong>
          </p>

          <p>
            Hyperlink School is committed to providing high-quality educational
            services to our students. We understand that occasionally
            circumstances may arise where a student may need to request a
            refund. This policy outlines the conditions under which a 100%
            refund may be granted.
          </p>

          <p>
            Please check the next page for the refund policy and eligibility
          </p>

          <p>
            <strong> Refund Eligibility is as follows:</strong>
          </p>

          <p>
            A student is eligible to request a 100% refund if and only if all of
            the following conditions are met:
          </p>

          <p>
            <strong> Technical Course Eligibility:</strong>{' '}
          </p>
          <p>
            This refund policy is applicable only to technical courses offered
            by Hyperlink School, including [Technical Courses] as below:
          </p>

          <p>
            App Development course <br />
            Web Development course <br />
            Front-end Development course <br />
            Back-end Development course <br />
            Full stack Development course
            <br />
            WordPress course
          </p>

          <p>
            <strong>Completion of Course: </strong>
          </p>
          <p>
            The student must successfully complete the entire [Technical
            Courses].
          </p>

          <p>
            <strong> Attendance:</strong>
          </p>
          <p>
            The student must have a minimum attendance rate of 80% during the
            course.
          </p>

          <p>
            <strong>Assignment Completion:</strong>
          </p>
          <p>
            The student must complete all assignments provided as part of the
            course curriculum.
          </p>

          <p>
            <strong>Refund Request Timing:</strong>
          </p>
          <p>
            The student can only request a refund after the completion of the
            course and after a period of 6 months from the course completion
            date. The 6-month period begins from the end/completion date of the
            course.
          </p>

          <p>
            <strong>Job Placement Assistance:</strong>
          </p>
          <p>
            Upon request for a refund, students must cooperate with the
            Hyperlink School placement cell by participating in a minimum of 3
            job interviews arranged by the school.
          </p>
          <p>
            Students must actively engage in these interviews and give a fair
            effort.
          </p>

          <p>
            <strong>Job Search Proof:</strong>{' '}
          </p>
          <p>
            If requested/asked, the student must provide proof of actively
            seeking employment in the field of app development within the
            6-month period following course completion. This can include job
            applications, interviews, or other relevant documentation.
          </p>

          <p>
            <strong> Misuse Discretion:</strong>
          </p>
          <p>
            In rare cases, Hyperlink School reserves the right to decline a
            refund if it is determined that the student is attempting to misuse
            this policy, such as providing false information or not actively
            seeking employment.
          </p>

          <p>
            <strong> Refund Method:</strong>
          </p>
          <p>
            Refunds will be processed via the original payment method used to
            enroll in the course or via a physical check, at the discretion of
            Hyperlink School.
          </p>

          <p>
            <strong> Refund Processing Time:</strong>
          </p>
          <p>
            Refunds will be processed within a minimum of 2 months and a maximum
            of 3 months from the date of the refund request. The exact
            processing time may vary based on the payment method and external
            processing factors.
          </p>

          <p>
            <strong>How to Request a Refund:</strong>
          </p>

          <p>
            To request a refund, eligible students should contact Hyperlink
            School's customer support team via email or phone, providing all
            necessary documentation to support their refund request, including
            evidence of completion, attendance, assignment completion, and job
            search efforts.
          </p>

          <p>
            <strong> Policy Updates:</strong>
          </p>

          <p>
            Hyperlink School reserves the right to update this refund policy at
            any time. Any changes will be communicated to enrolled students
            through appropriate channels.
          </p>

          <p>
            <strong>Contact Information:</strong>
          </p>

          <p>
            For questions or concerns related to this refund policy, please
            contact our customer support team at hello[at]hyperlinlkschool.com
            or call us on +918296244720
          </p>

          <p>
            <strong> Effective Date:</strong>
          </p>

          <p>
            This refund policy is effective as of 01-October-2023, and it
            applies to all Hyperlink School [Technical Courses] enrollments from
            that date onwards.
          </p>

          <Footer />
        </div>
      </main>
    </>
  );
};

export default TC;
