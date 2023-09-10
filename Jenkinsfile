pipeline {
    agent any

    stages {
        stage('Branch Based Actions') {
            steps {
                script {
                    if (env.BRANCH_NAME == 'dev') {
<<<<<<< HEAD
                        echo "This is the dev one!"
                    } else if (env.BRANCH_NAME == 'release') {
                        echo "This is the release branch!"
                    } else if (env.BRANCH_NAME == 'main') {
                        echo "This is the main branch!"
=======
                        echo "This is the dev branch!"
                    } else if (env.BRANCH_NAME == 'release') {
                        echo "This is the release branch!"
                    } else if (env.BRANCH_NAME == 'main') {
                        echo "This is the main one"
>>>>>>> main
                    } else {
                        echo "This is an unrecognized branch: ${env.BRANCH_NAME}"
                    }
                }
            }
        }
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> main
