import * as core from '@actions/core'
import * as github from '@actions/github'
import { generate } from './doggo/generator'
;(async function run(): Promise<void> {
  try {
    const ctx = github.context
    if (!ctx.payload.pull_request) {
      throw new Error('Not in the context of a PR!')
    }

    const ghCli = new github.GitHub(core.getInput('github-token'))
    const doggo = generate()
    ghCli.issues.createComment({
      ...ctx.repo,
      issue_number: ctx.payload.pull_request.number, // eslint-disable-line @typescript-eslint/camelcase
      body: `![Doggo](${doggo})`
    })
  } catch (e) {
    core.setFailed(e.message)
  }
})()
