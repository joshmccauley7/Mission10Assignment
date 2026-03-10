using System;
using System.Collections.Generic;

namespace Mission10Assignemnt.Data;

public partial class EfmigrationsLock
{
    public int Id { get; set; }

    public string Timestamp { get; set; } = null!;
}
