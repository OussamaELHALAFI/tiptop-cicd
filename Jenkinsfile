pipeline {
    agent any

    stages {
        stage('Branch Based Actions') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'dev') {
                        echo "This is the dev branch!"
                    } else if (env.BRANCH_NAME == 'release') {
                        echo "This is the release branch!"
                    } else if (env.BRANCH_NAME == 'main') {
                        echo "This is the main one"
                    } else {
                        echo "This is an unrecognized branch: ${env.BRANCH_NAME}"
                    }
                }
            }
        }
    }
}