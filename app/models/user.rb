class User < ActiveRecord::Base
  #attr_accessible :name, :email

  def self.authenticate_with_persona(assertion)
    server = 'https://verifier.login.persona.org/verify'
    assertion_params = {
      assertion: assertion,
      audience: 'http://myfeeds.local'
    }
    request = RestClient::Resource.new(server, verify_ssl: true).post(assertion_params)
    response = JSON.parse(request)

    if response['status'] == 'okay'
      found_user = User.find_by_email(response['email']) 
      if found_user and found_user['email']
        puts 'Existing User'
      else
        puts 'Creating User'
        user = User.new
        user.name = response['name']
        user.email = response['email']
        user.save
      end

      return response
    else
      return {status: 'error'}.to_json
    end
  end
end
