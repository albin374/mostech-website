import React from 'react';
import { UserPlus, Flag, Calendar, ListTodo, Users, PieChart } from 'lucide-react';
import './TaskFeatures.css';

const TaskFeatures = () => {
  return (
    <section className="tm-features-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="tm-features-header">
          <div className="tm-section-badge-center">
            02 — Everything Your Team Needs
          </div>
          <h2 className="tm-features-title">
            One Place to <span className="tm-text-blue">Create, Organize & Complete</span> Tasks.
          </h2>
          <p className="tm-features-subtitle">
            Take control of daily work with powerful tools designed<br/>
            to keep every task clear and accountable.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="tm-features-grid">
          
          <div className="tm-f-card card-blue">
            <div className="tm-f-icon-wrap icon-blue-light">
              <UserPlus size={24} color="#3b82f6" />
            </div>
            <h4>Create & Assign Tasks</h4>
            <p>Create tasks quickly and assign them to the right team members.</p>
            <div className="tm-f-number num-blue">01</div>
          </div>

          <div className="tm-f-card card-green">
            <div className="tm-f-icon-wrap icon-green-light">
              <Flag size={24} color="#22c55e" />
            </div>
            <h4>Prioritize Work</h4>
            <p>Organize tasks by priority so your team knows what needs attention first.</p>
            <div className="tm-f-number num-green">02</div>
          </div>

          <div className="tm-f-card card-orange">
            <div className="tm-f-icon-wrap icon-orange-light">
              <Calendar size={24} color="#f97316" />
            </div>
            <h4>Set Deadlines</h4>
            <p>Add due dates and reminders to keep work moving on schedule.</p>
            <div className="tm-f-number num-orange">03</div>
          </div>

          <div className="tm-f-card card-purple">
            <div className="tm-f-icon-wrap icon-purple-light">
              <ListTodo size={24} color="#8b5cf6" />
            </div>
            <h4>Track Task Progress</h4>
            <p>Monitor tasks from To Do → In Progress → Completed.</p>
            <div className="tm-f-number num-purple">04</div>
          </div>

          <div className="tm-f-card card-blue2">
            <div className="tm-f-icon-wrap icon-blue2-light">
              <Users size={24} color="#0ea5e9" />
            </div>
            <h4>Team Collaboration</h4>
            <p>Share updates, comments, files, and feedback without losing context.</p>
            <div className="tm-f-number num-blue2">05</div>
          </div>

          <div className="tm-f-card card-red">
            <div className="tm-f-icon-wrap icon-red-light">
              <PieChart size={24} color="#ef4444" />
            </div>
            <h4>Task Reports & Insights</h4>
            <p>Get a clear overview of completed, pending, and overdue tasks.</p>
            <div className="tm-f-number num-red">06</div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TaskFeatures;
