import jenkins.model.*
jenkins = Jenkins.instance

node{

    stage(‘Build’) {

      sh 'docker-compose -f docker-compose-dev.yml build'
    }

}