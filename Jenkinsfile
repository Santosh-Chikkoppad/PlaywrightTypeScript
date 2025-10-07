pipeline {
  agent any

  tools {
    nodejs "NodeJS"    // must match the NodeJS name you configured
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install dependencies & Playwright browsers') {
      steps {
        bat """
          echo ==== Cleaning workspace node_modules if present ====
          if exist node_modules rmdir /s /q node_modules

          echo ==== Installing NPM dependencies ====
          npm install

          echo ==== Installing Playwright browsers ====
          npx playwright install
        """
      }
    }

    stage('List detected tests') {
      steps {
        bat """
          echo ==== Playwright will detect these tests ====
          npx playwright test --list
        """
      }
    }

    stage('Run tests (Allure reporter)') {
      steps {
        bat """
          echo ==== Running Playwright tests (Allure reporter) ====
          REM To run a single file, add the path after 'test'
          npx playwright test --reporter=allure-playwright
        """
      }
    }

    stage('Verify allure-results exists') {
      steps {
        bat """
          if not exist "%WORKSPACE%\\allure-results" (
            echo ERROR: allure-results folder not found at "%WORKSPACE%\\allure-results"
            echo Listing workspace contents:
            dir "%WORKSPACE%"
            exit /b 1
          ) else (
            echo allure-results found.
            dir "%WORKSPACE%\\allure-results"
          )
        """
      }
    }

    stage('Generate Allure report (using Allure CLI)') {
      steps {
        script {
          // 'Allure' must match your Allure tool name in Global Tool Config
          def allureHome = tool name: 'Allure', type: 'hudson.plugins.allure_tools.AllureCommandlineInstallation'
          bat "\"${allureHome}\\bin\\allure.bat\" generate \"%WORKSPACE%\\allure-results\" -o \"%WORKSPACE%\\allure-report\" -c"
        }
      }
    }

    stage('Publish Allure report (Jenkins Allure plugin)') {
      steps {
        allure([
          includeProperties: false,
          jdk: '',
          results: [[path: 'allure-results']]
        ])
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
      junit allowEmptyResults: true, testResults: '**/allure-results/*.xml' // optional, if you generate junit xmls
    }
  }
}
