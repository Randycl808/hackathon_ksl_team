class Api::MonstersController < ApplicationController
  before_action :set_monster, only: [:update, :show, :destroy, :monsters_all]

def all
  monsters= Monster.all
  monster_data = monsters.map do |monster|
    {monster: monster, items: monster.items}
  end
  render json: monster_data
end

  def index 
    render json: Monster.all
  end

  def monsters_all
    render json: {monster: @monster, items: @monster.items}
end

def show
  render json: @monster
end

def create
  monster = Monster.new(monster_params)
  if(monster.save)
    render json: monster
  else
    render json: {error:monster.errors.full_messages}, status: 422
  end
end

def update 
  if(@monster.update(monster_params))
    render json: @monster
  else 
    render json: {error:@monster.errors.full_messages}, status: 422
  end
end

def destroy
  render json: @monster.destroy
end

private

def set_monster
    @monster = Monster.find(params[:id])
end

def monster_params
  params.require(:monster).permit(:name,:items)
end

end
