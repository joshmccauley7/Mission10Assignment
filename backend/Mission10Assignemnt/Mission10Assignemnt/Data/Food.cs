using System;
using System.Collections.Generic;

namespace Mission10Assignemnt.Data;

public partial class Food
{
    public int BowlerId { get; set; }

    public string BowlerLastName { get; set; } = null!;

    public string BowlerFirstName { get; set; } = null!;

    public string BowlerMiddleInit { get; set; } = null!;

    public string BowlerAddress { get; set; } = null!;

    public string BowlerCity { get; set; } = null!;

    public string BowlerState { get; set; } = null!;

    public string BowlerZip { get; set; } = null!;

    public string BowlerPhoneNumber { get; set; } = null!;

    public int TeamId { get; set; }
}
