# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Task, type: :model do
  before do
    @task = create(:task)
    sleep(1)
    @starred_task = create(:starred_task)
    sleep(1)
    @todays_deadlined_task = create(:todays_deadlined_task)
    sleep(1)
    @thisweek_deadlined_task = create(:thisweek_deadlined_task)
    @done_task = create(:logically_deleted_task)
  end

  context 'Task.latest_ordered' do
    let!(:all_tasks) { Task.latest_ordered }
    it 'task, starred_task, todays_deadlined_task, thisweek_deadlined_task in this order' do
      expect(all_tasks).to eq [@thisweek_deadlined_task, @todays_deadlined_task, @starred_task, @task]
    end
  end

  context 'Task.oldedst_ordered' do
    let!(:all_tasks) { Task.oldest_ordered }
    it 'thisweek_deadlined_task, todays_deadlined_task, starred_task, task in this order' do
      expect(all_tasks).to eq [@task, @starred_task, @todays_deadlined_task, @thisweek_deadlined_task]
    end
  end

  context 'Task.stars' do
    let!(:match_tasks) { Task.stars }
    it 'matches only starred_tasks' do
      expect(match_tasks).to eq [@starred_task]
    end
  end

  context 'Task.todays_deadlined' do
    let!(:match_tasks) { Task.todays_deadlined }
    it 'matches only @todays_deadlined_task' do
      expect(match_tasks).to eq [@todays_deadlined_task]
    end
  end

  context 'Task.nextweek_deadlined' do
    let!(:match_tasks) { Task.nextweek_deadlined }
    it 'matches only @todays_deadlined_task, @thisweek_deadlined_task' do
      expect(match_tasks).to eq [@todays_deadlined_task, @thisweek_deadlined_task]
    end
  end

  context 'Task.done_lists' do
    let!(:match_tasks) { Task.unscoped.where.not(deleted_at: nil) }
    it 'matches only @done_task' do
      expect(match_tasks).to eq [@done_task]
    end
  end
end
