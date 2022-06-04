import { Request, Response, NextFunction } from 'express';
import MatchService from '../services/MatchService';

export default class TeamController {
  public matchService = new MatchService();

  constructor() {
    this.getAll = this.getAll.bind(this);
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    const { inProgress } = req.query;
    let matches: object[];

    try {
      switch (inProgress) {
        case 'true':
          matches = await this.matchService.getAll(true);
          break;
        case 'false':
          matches = await this.matchService.getAll(false);
          break;
        default: matches = await this.matchService.getAll(null);
      }

      return res.status(200).json(matches);
    } catch (err) {
      next(err);
    }
  }
}