class SummonersController < ApplicationController
  def index
  end

  def show
    
  end

  def new
  end

  def create

    @summoner = Summoner.get_or_create_summoner(params[:name])
    #@summoner = Summoner.retrieve_summoner(params[:name])

    respond_to do |format|

      #print @summoner.inspect

      if @summoner then
        format.html { redirect_to @summoner, flash: {success: 'Success'} }
        format.js   { @summoner }
        format.json { render json: @summoner, status: :created, location: @summoner }
      else
        format.html { redirect_to root_path, flash: {danger: @summoner.errors.full_messages}}
        format.json { render json: @summoner.errors.full_messages, status: :unprocessable_entity }
      end

    end

  end
end
