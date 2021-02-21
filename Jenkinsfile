pipeline {
    agent { any {} }
    stages {
        stage('build') {
            steps {
                sh 'docker-compose -f docker-compose-dev.yml build'
            }
        }
    }
}