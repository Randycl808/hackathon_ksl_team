class Api::JobsController < ApplicationController
  before_action :set_job, only: [:update, :show, :destroy, :jobs_all]

def all
  jobs= Job.all
  job_data = jobs.map do |job|
    {job: job, items: job.items}
  end
  render json: job_data
end

  def index 
    render json: Job.all
  end


def show
  render json: @job
end

def create
  job = Job.new(job_params)
  if(job.save)
    render json: job
  else
    render json: {error:job.errors.full_messages}, status: 422
  end
end

def update 
  if(@job.update(job_params))
    render json: @job
  else 
    render json: {error:@job.errors.full_messages}, status: 422
  end
end

def destroy
  render json: @job.destroy
end

private

def set_job
    @job = Job.find(params[:id])
end

def job_params
  params.require(:job).permit(:title,:company,:salary)
end
end
