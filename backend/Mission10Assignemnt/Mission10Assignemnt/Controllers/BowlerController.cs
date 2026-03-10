using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Mission10Assignemnt.Data;
using Microsoft.EntityFrameworkCore;

namespace Mission10Assignemnt.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlerController : ControllerBase
    {
        private BowlingLeagueContext _bowlerContext;

        public BowlerController(BowlingLeagueContext temp)
        {
            _bowlerContext = temp;
        }

        [HttpGet(Name = "GetBowler")]
        public IEnumerable<Bowler> Get()
        {
            var bowlerList = _bowlerContext.Bowlers
                .Include(b => b.Team)
                .Where(b => b.Team != null && (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
                .ToList();
            return bowlerList;
        }
    }
}
